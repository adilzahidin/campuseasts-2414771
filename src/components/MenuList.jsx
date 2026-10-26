import { useState } from 'react'
import MenuItemCard from './MenuItemCard.jsx'
function MenuList({ items, onAdd }) {
    const [category, setCategory] = useState('All')

    const categories = ['All', ...new Set(items.map((item) => item.category))]
    const visible = category === 'All' ? items : items.filter((item) => item.category === category)



    if (items.length === 0) {
        return <p className="muted">No items on this menu yet.</p>
    }
    return (
    <>
        <div className="filters">
            {categories.map((c) => (
            <button
                key={c}
                type="button"
                className={c === category ? 'btn btn-small' : 'btn btn-outline btn-small'}
                onClick={() => setCategory(c)}>
                {c}
            </button>
            ))}
        </div>
        <div className="grid">
            {visible.map((item) => (
                <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
            ))}
        </div>
    </>
    )

}
export default MenuList
