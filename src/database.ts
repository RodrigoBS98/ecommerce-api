import {connect} from 'mongoose'

export async function startConnection(){
    await connect(/*your database conection goes here -->*/'', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
    })
    console.log('Database is connected')
}
