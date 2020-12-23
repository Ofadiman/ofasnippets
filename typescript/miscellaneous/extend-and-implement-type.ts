/* eslint-disable @typescript-eslint/consistent-type-definitions */
type User = {
  name: string
}

interface Admin extends User {
  id: string
}

class Admin implements User {
  public constructor(public name: string) {}
}
