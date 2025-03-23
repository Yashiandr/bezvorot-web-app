export class StorybookTypeDetails {
  private data: Record<string, string>;

  constructor(data: Record<string, string>) {
    this.data = data;
  }

  toString(): string {
    return Object.entries(this.data)
      .map(([key, value]) => `${key}: ${value}`)
      .join(";\n");
  }
}
