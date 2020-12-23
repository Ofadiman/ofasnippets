class FieldsWithoutInitialization {
  /**
   * The exclamation mark means that we are aware that the field doesn't have an initial value
   * but we promise the compiler that we will initialize it later before we start to using this class.
   *
   * This may lead to some bugs but might be useful when dealing with data from api's.
   */
  public name!: string
}
