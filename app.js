const app = Vue.createApp({
    data() {
        return {
            name: 'Martin',
            age: '28',
            input: {
                name: "Martin Guzlej"
            },
            img: {
                link: "https://images.unsplash.com/photo-1626705106454-e87b87e7c1b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80"
            }
        }
    },
    methods: {
        rNum() {
            return Math.random()
        }
    }
})



app.mount('#assignment');