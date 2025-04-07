import { description, expectedOutputDescription } from "./test-data";

describe("doSomething", () => {
  beforeAll(() => {
    // Runs once before all tests
  });

  beforeEach(() => {
    // Runs before each test
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  afterAll(() => {
    // Runs once after all tests
  });

  it("JSON.stringify(Description) should contain all properties", () => {
    expect(JSON.stringify(description)).toEqual(expectedOutputDescription);
    //    console.error(JSON.stringify(description, null, 2));
  });
});
