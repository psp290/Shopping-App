const mongoose = require('mongoose');

const url = `mongodb+srv://shopping-app:shopping-123@cluster0.irhui.mongodb.net/shop?retryWrites=true&w=majority`;

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    )
    .then(()=>{
        console.log('connect to database');
    });