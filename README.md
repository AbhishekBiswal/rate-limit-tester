# Progressive Rate-Limit Tester

**Fork of [theDanielJLewis/rate-limit-tester](https://github.com/theDanielJLewis/rate-limit-tester.git). I have replaced request-promise-native(deprecated) with axios and added the capability to make customize the request using config.js (follows same format as axios)**

Test or discover the rate limit of any URL with this Node.js script! It will let you test a custom number of requsts per second (default) or per minute starting at an optional minimum to a the maximum, testing each limit for about a minute.

For example, if a URL is rate-limited to 2 requests per second, and you enter a minimum of 1 and maximum of 5, the test will step through as follows.

- 1 request per second for about a minute
- 2 requests per second for about a minute
- Fail during a test sending 3 requests per second

## Installation

You must have Node.js already installed.

```
git clone https://github.com/AbhishekBiswal/rate-limit-tester.git
cd rate-limit-tester
npm i
```

## Usage

First edit the `config.js` file. The format is exactly the same as [axios](https://github.com/theDanielJLewis/rate-limit-tester.git) then run:

`node index.js --max=[NUM] [OPTIONS]`

### Options

```
  --version   Show version number                                      [boolean]
  --max       Maximum requests to run per time                        [required]
  --min       Minimum requests to run per time
  -s          Set to requests to second [default]
  -m          Set to requests to minute
  -h, --help  Show help                                                [boolean]
```
