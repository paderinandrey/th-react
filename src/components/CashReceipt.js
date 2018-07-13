import CashReceiptItem from './CashReceiptItem';
import React from 'react';

class CashReceipt extends React.Component {

  renderItems() {
    return this.props.items.map((item, index) =>
      <CashReceiptItem
          key={index.toString()}
          value={item.value}
          num={index}
          removeItem={this.props.removeItem}
        />
    );
  }

  render() {
    return (
      <div>
        <ul> {this.renderItems()} </ul>
      </div>
    );
  }
}

export default CashReceipt;




// export const TodoList = (props) => {
//   return (
//     <div className="Todo-List">
//       <ul>
//         {props.todos.map(todo =>
//           <TodoItem
//             handleToggle={props.handleToggle}
//             handleRemove={props.handleRemove}
//             key={todo.id} {...todo}/>
//         )}
//       </ul>
//     </div>
//   )
// }

// TodoList.propTypes = {
//   todos: React.PropTypes.array.isRequired
// }
