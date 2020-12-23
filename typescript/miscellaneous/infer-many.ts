/* eslint-disable @typescript-eslint/consistent-type-definitions */

type Component<State, Props> = {
  props: Props
  state: State
}

type GetStateAndProps<ComponentType> = ComponentType extends Component<infer State, infer Props>
  ? [State, Props]
  : never

const Component: Component<number, string> = {
  props: 'props',
  state: 55
}

const ComponentStateAndProps: GetStateAndProps<typeof Component> = [11, 'props']
