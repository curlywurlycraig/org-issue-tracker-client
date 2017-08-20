import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.viewer.todos.map(todo =>
              <p key={todo.id}><b>{ todo.todoType }</b> Here's a todo: { todo.heading }</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
          id
          todos {
              id
              todoType
              heading
          }
      }`,
  },
});
