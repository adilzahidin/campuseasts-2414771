const vendors = [
    {
    id: 'my-restaurant',
    name: 'Adillicious',
    location: 'Mahallah Salahuddin, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
        { id: 'F001', name: 'Nasi Goreng Ayam', description: 'Fried rice with chicken, egg and vegetables', price: 7.5, category: 'Rice', available: true },
        { id: 'F002', name: 'Chicken Chop', description: 'Grilled chicken with black pepper sauce, fries and coleslaw', price: 9, category: 'Western', available: true },
        { id: 'D001', name: 'Extra Joss', description: 'Iced energy drink, served cold', price: 2.5, category: 'Drinks', available: false },
    ],
    },
    {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
    { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
    { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price:
    3, category: 'Drinks', available: true },
    ],
    },
]
export default vendors
