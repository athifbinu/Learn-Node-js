homepage: [https://github.com/hyq2015/Message](https://github.com/hyq2015/Message)
### introduction
show alert message on your webpage
### usage
npm install -D alert-message

```
import Message from "alert-message"
import "path/to/node_modules/alert-message/lib/styles/index.min.css"

/**
 * @param args - {txt: "", time: 2500}, time default 2500(ms)
 */
Message.warn({txt: "warning text"});
Message.error({txt: "error text"});
Message.success({txt: "success text"});
```
