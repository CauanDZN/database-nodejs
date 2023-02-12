import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return await this.repository
    .createQueryBuilder("games")
    .where("games.title ILIKE '%' || :id || '%'", { id: param })
    .getMany()
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return await this.repository.query("SELECT COUNT(title) FROM games")
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const userList = await this.repository
    .createQueryBuilder("games")
    .leftJoinAndSelect("games.users", "user")
    .where("games.id = :id", { id })
    .getMany()

    return userList[0].users
  }
}
