// Error: :8:4: Derived constructor must call super()

class B {}

class C extends B {
  constructor() {
    // no super call
  }
}
