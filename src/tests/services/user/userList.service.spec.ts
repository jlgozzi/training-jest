import userListService from "../../../services/user/userList.service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";

describe("List all users", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should list all registered users", async () => {
    const userList = await userListService();

    expect(userList).toHaveProperty("map");
  });
});
