import React, { useState } from 'react';

const ShoppingList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'מנגו', quantity: 2 },
        { id: 2, name: 'תפוחי אדמה', quantity: 5 },
        { id: 3, name: 'שוקולד', quantity: 1 },
      ]);
      return (
        <div>
          <h2>רשימת קניות</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      );
}
export default ShoppingList;