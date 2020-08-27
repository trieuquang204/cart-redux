var initialState = [
    {
        id: 1,
        name: 'Iphone',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Iphone2',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 3,
        name: 'Iphone3',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 4,
        name: 'Iphone4',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 5,
        name: 'Iphone5',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 1,
        name: 'Iphone',
        image:'',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10
    },
]

const product = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default product