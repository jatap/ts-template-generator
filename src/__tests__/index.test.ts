import { spawnSync } from "child_process";

describe("main", () => {
  let execution: any;

  beforeAll(async () => {
    execution = await spawnSync(
      "node",
      ["src/index.ts"],
      {
        stdio: "pipe",
        encoding: "utf-8"
      }
    );
  });

  test("prints stdout", () => {
    const result = "Hello World!";

    expect(execution.stdout.toString().trim()).toBe(result);
  });
});
