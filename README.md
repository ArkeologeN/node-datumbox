# DatumBox API for Node.js
[DatumBox](http://www.datumbox.com/ "DatumBox Website")

## Use as defined [DatumBox Sandbox](http://www.datumbox.com/app/webroot/api-sandbox/ "DatumBox Sandbox API Browser")

This module is designed to make the DatumBox API available in Node.js. Its pretty inspired and ported from PHP Wrapper.

What is the Datumbox API?
=======================

The Datumbox is a web service which allows you to use our tools from your website, software or mobile application. The API gives you access to all of the supported functions of our service. In this page you will find all the information that you need in order to use our API, fully implemented code samples and the latest API Documentation.

Our Web Service uses "REST-Like" RPC-style operations over HTTP POST requests with parameters URL encoded into the request and its response is encoded in JSON. It is designed to be easy to use and you can implement it in any model computer language that allows you generating web requests.

How to use the API Client?
=======================

All you need to do is download the sample code, edit example.php and place your API Key. To get an API Key sign up to datumbox.com service and visit the API Access panel in your profile.

Getting Started
=================

Initialize the module with your api key.
```javascript
var datum = require('datumbox').factory("API_KEY_HERE");
```

This big blast we added in version `1.0.1` is, you can now make `asynchronous` parallel service request from `DatumBox` on your text. How?

```javascript
datum.parallel(
    "So, do you dare to find different sentiments of me in one request?", 
    ['SentimentAnalysis', 'TwitterSentimentAnalysis', 'GenderDetection'],
   function(err, results) {
       if ( err )
        return console.error(err);
        
        // results is [] and have the output in same service format.
   }
);
```

Services values that are available for batch should be within
```javascript
'SentimentAnalysis', 'TwitterSentimentAnalysis', 'SubjectivityAnalysis',
'TopicClassification', 'SpamDetection', 'AdultContentDetection',
'ReadabilityAssessment', 'LanguageDetection', 'CommercialDetection',
'EducationalDetection', 'GenderDetection', 'TextExtraction',
```

## Sentiment Analysis

Identifies the Sentiment of the Document

```javascript
datum.sentimentAnalysis("Can you find my sentiments please?", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```


## Twitter Sentiment Analysis

Identifies the Sentiment of Twitter Messages

```javascript
datum.twitterSentimentAnalysis("Can you find my #sentiments #please?", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Subjectivity Analysis

Classifies Document as Subjective or Objective

```javascript
datum.subjectivityAnalysis("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Topic Classification

Identifies the Topic of the Document

```javascript
datum.topicClassification("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Spam Detection

Classifies the Document as spam or nospam

```javascript
datum.spamDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Adult Content Detection

Classifies the Document as adult or noadult

```javascript
datum.adultContentDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Readability Assessment

Evaluates the Readability of the Document

```javascript
datum.readabilityAssessment("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Language Detection

Identifies the Language of the Document

```javascript
datum.languageDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Commercial Detection

Classifies the Document as commercial or nocommercial

```javascript
datum.commercialDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Educational Detection

Classifies the Document as educational or noeducational

```javascript
datum.educationalDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Gender Detection

Gender Detection Service

```javascript
datum.genderDetection("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Text Extraction

Extracts the clear text from Webpage

```javascript
datum.textExtraction("TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Keyword Extraction

Extracts the Keywords of the Document

```javascript
datum.keywordExtraction("TEXT_TO_FIND_HERE", "n", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Document Similarity

Estimates the similarity between 2 Documents

```javascript
datum.documentSimilarity("DOCUMENT_CONTENT_1", "DOCUMENT_CONTENT_2",, function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Magic Caller

Get the sentiments of DatumService via magic by defining service on the fly.

```javascript
datum.magic("SentimentAnalysis", "TEXT_TO_FIND_HERE", function(err, data) {
    if ( err )
        return console.log(err);

    console.log(data);  // Remarks here.
});
```

## Contributors

Right now, the project is only getting developed by:
* [Hamza Waqas](mailto: hamzawaqas@live.com) - He lives at [@HamzaWaqas](https://twitter.com/HamzaWaqas) and you can follow him there ;-)
* That's you!