import { config } from './src/config/config.js';
import app from './src/app.js'
import connectDatabase from './src/database/database.js'

connectDatabase()

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});