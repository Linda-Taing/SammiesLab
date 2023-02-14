class FakeDb {

    burgers = [{
        id: 'abc',
        name: 'The Big J',
        emoji: '🍔'
    }, {
        id: 'bcd',
        name: 'The Med J',
        emoji: '🍔'
    }, {
        id: 'ced',
        name: 'The Not Burger',
        emoji: '🥗'
    }
    ]

}

export const fakeDb = new FakeDb()