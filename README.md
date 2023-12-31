# Perfmon

Simple wrapper for headless chrome to measure page timing. Logs into SSO, grabs an IDP token, and silently navigates to a page before doing its measurement.

## Usage
Show all options: 

```node perfmon.js```

Single Probe:

```node perfmon.js -u gdtesting199 -p G0123g45678 https://productivity.test-godaddy.com```


Output:
```
{ name: 'https://productivity.test-godaddy.com/',
  entryType: 'navigation',
  startTime: 0,
  duration: 3162.095000036061,
  initiatorType: 'navigation',
  nextHopProtocol: 'http/1.1',
  workerStart: 0,
  redirectStart: 0,
  redirectEnd: 0,
  fetchStart: 0.1550000160932541,
  domainLookupStart: 1.0049999691545963,
  domainLookupEnd: 1.8100000452250242,
  connectStart: 1.8100000452250242,
  connectEnd: 133.14499997068197,
  secureConnectionStart: 29.25000002142042,
  requestStart: 133.20499996189028,
  responseStart: 536.3750000251457,
  responseEnd: 570.7799999509007,
  transferSize: 11486,
  encodedBodySize: 10831,
  decodedBodySize: 39539,
  serverTiming: [],
  unloadEventStart: 0,
  unloadEventEnd: 0,
  domInteractive: 2620.145000051707,
  domContentLoadedEventStart: 2620.2500000363216,
  domContentLoadedEventEnd: 2620.66000001505,
  domComplete: 3159.5049999887124,
  loadEventStart: 3159.529999946244,
  loadEventEnd: 3162.095000036061,
  type: 'navigate',
  redirectCount: 0 }
 ```


Query a page 3 times with 10 seconds between each probe: 

```node perfmon.js -u gdtesting199 -p G0123g45678 -n 3 -t 10 https://productivity.test-godaddy.com```

Output:
```
{ average:
   { startTime: 0,
     duration: 3050.7699999725446,
     workerStart: 0,
     redirectStart: 0,
     redirectEnd: 0,
     fetchStart: 0.22499996703118086,
     domainLookupStart: 0.5416666390374303,
     domainLookupEnd: 0.8183332780996958,
     connectStart: 0.8183332780996958,
     connectEnd: 45.52499996498227,
     secureConnectionStart: 9.518333322679004,
     requestStart: 46.081666640626885,
     responseStart: 293.4316666408752,
     responseEnd: 321.64833329928416,
     transferSize: 11420,
     encodedBodySize: 10831,
     decodedBodySize: 39539.666666666664,
     serverTiming: 0,
     unloadEventStart: 99.98499997891486,
     unloadEventEnd: 100.23166666117807,
     domInteractive: 2666.198333298477,
     domContentLoadedEventStart: 2666.35999995439,
     domContentLoadedEventEnd: 2666.7399999375143,
     domComplete: 3047.921666642651,
     loadEventStart: 3047.9499999200925,
     loadEventEnd: 3050.7699999725446,
     redirectCount: 0,
     numberOfProbes: 3,
     timeBetweenProbes: 10 },
  probes:
   [ { name: 'https://productivity.test-godaddy.com/',
       entryType: 'navigation',
       startTime: 0,
       duration: 2881.664999993518,
       initiatorType: 'navigation',
       nextHopProtocol: 'http/1.1',
       workerStart: 0,
       redirectStart: 0,
       redirectEnd: 0,
       fetchStart: 0.18500001169741154,
       domainLookupStart: 1.1350000277161598,
       domainLookupEnd: 1.9649999449029565,
       connectStart: 1.9649999449029565,
       connectEnd: 136.08500000555068,
       secureConnectionStart: 28.55499996803701,
       requestStart: 136.144999996759,
       responseStart: 588.4099999675527,
       responseEnd: 614.7199999541044,
       transferSize: 11486,
       encodedBodySize: 10831,
       decodedBodySize: 39539,
       serverTiming: [],
       unloadEventStart: 0,
       unloadEventEnd: 0,
       domInteractive: 2416.689999983646,
       domContentLoadedEventStart: 2416.8949999148026,
       domContentLoadedEventEnd: 2417.2649999381974,
       domComplete: 2879.0700000245124,
       loadEventStart: 2879.1049999417737,
       loadEventEnd: 2881.664999993518,
       type: 'navigate',
       redirectCount: 0 },
     { name: 'https://productivity.test-godaddy.com/',
       entryType: 'navigation',
       startTime: 0,
       duration: 4275.284999981523,
       initiatorType: 'navigation',
       nextHopProtocol: 'http/1.1',
       workerStart: 0,
       redirectStart: 0,
       redirectEnd: 0,
       fetchStart: 0.1949999714270234,
       domainLookupStart: 0.1949999714270234,
       domainLookupEnd: 0.1949999714270234,
       connectStart: 0.1949999714270234,
       connectEnd: 0.1949999714270234,
       secureConnectionStart: 0,
       requestStart: 0.9099999442696571,
       responseStart: 146.80999994743615,
       responseEnd: 179.57999999634922,
       transferSize: 11387,
       encodedBodySize: 10831,
       decodedBodySize: 39540,
       serverTiming: [],
       unloadEventStart: 150.75999998953193,
       unloadEventEnd: 151.2349999975413,
       domInteractive: 3735.5849999003112,
       domContentLoadedEventStart: 3735.63499993179,
       domContentLoadedEventEnd: 3735.924999928102,
       domComplete: 4273.47999997437,
       loadEventStart: 4273.499999893829,
       loadEventEnd: 4275.284999981523,
       type: 'navigate',
       redirectCount: 0 },
     { name: 'https://productivity.test-godaddy.com/',
       entryType: 'navigation',
       startTime: 0,
       duration: 1995.3599999425933,
       initiatorType: 'navigation',
       nextHopProtocol: 'http/1.1',
       workerStart: 0,
       redirectStart: 0,
       redirectEnd: 0,
       fetchStart: 0.29499991796910763,
       domainLookupStart: 0.29499991796910763,
       domainLookupEnd: 0.29499991796910763,
       connectStart: 0.29499991796910763,
       connectEnd: 0.29499991796910763,
       secureConnectionStart: 0,
       requestStart: 1.1899999808520079,
       responseStart: 145.07500000763685,
       responseEnd: 170.6449999473989,
       transferSize: 11387,
       encodedBodySize: 10831,
       decodedBodySize: 39540,
       serverTiming: [],
       unloadEventStart: 149.19499994721264,
       unloadEventEnd: 149.4599999859929,
       domInteractive: 1846.320000011474,
       domContentLoadedEventStart: 1846.5500000165775,
       domContentLoadedEventEnd: 1847.029999946244,
       domComplete: 1991.2149999290705,
       loadEventStart: 1991.2449999246746,
       loadEventEnd: 1995.3599999425933,
       type: 'navigate',
       redirectCount: 0 } ] }
   ```

Prod environment: 

```node perfmon.js -u xyz -p passw0rd -e prod https://productivity.godaddy.com```
# perfmon
