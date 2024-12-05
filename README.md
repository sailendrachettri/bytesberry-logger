## Logger helps you write better console logs


### Also available for yarn
`yarn add @bytesberry/logger`


 ## Example code 
```bash
import { Log } from '@bytesberry/logger';

Log.error("Some error occured!");
Log.info("Fetching data...")
Log.output("Output Array: ", outputArr);

```

## Available Methods

| Method      | Description                                                                 | Example Usage                               |
|-------------|-----------------------------------------------------------------------------|--------------------------------------------|
| `.output()` | Displays the given message in green to indicate success or standard output. | `Log.output('Some message', outputArr);` `Log.output('Some message', {outputArr});` |
| `.error()`  | Logs the message to the console in red, typically used for errors or warnings. | `Log.error('An error occurred!');`        |
| `.info()`   | Displays informational messages in teal, ideal for general or debug information. | `Log.info('Fetching data...');`          |

