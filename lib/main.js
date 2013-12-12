/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   7th December, 2013
 */

var VERSION = '1.0'
    , URL = 'http://api.datumbox.com'
    , FORMAT = 'json'
    , request = require('request')
    , util = require('util')
    , async = require('async')
    , _ = require('lodash')
    , parameters = {}
    , self;


var DatumBox = function(key) {
    this.api_key = key;

    /**
     * Creates a rest call
     * @param service
     * @param body
     * @param cb
     */
    this.createCall = function(service, body, cb) {
        body['api_key'] = this.api_key;
        self = this;

        request({
            url: util.format('%s/%s/%s.%s', URL, VERSION, service, FORMAT),
            method: "POST",
            form: body
        }, function(err, response, body) {
            self.parseReply(body, cb);
        });
    };

    /**
     *  Parse Response.
     * @param reply
     * @param cb
     * @returns {*}
     * @constructor
     */
    this.parseReply = function(reply, cb) {
        reply = JSON.parse(reply);

        if ( typeof reply.output.status !== 'undefined' && reply.output.status == 1) {
            return cb(null, reply.output.result);
        }
        if( typeof reply.output.error.ErrorCode !== 'undefined' && typeof reply.output.error.ErrorMessage !== 'undefined') {
            return cb({
                message: reply.output.error.ErrorMessage,
                code: reply.output.error.ErrorCode
            }, null);
        }

        return cb(null, null);
    }

    /**
     *  Identifies the Sentiment of the Document
     *
     *  The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment)
     *  depending on whether they express a positive, negative or neutral opinion.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.sentimentAnalysis = function SentimentAnalysis(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Identifies the Sentiment of Twitter Messages
     *
     * The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter.
     * It classifies the tweets as positive, negative or neutral depending on their context.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.twitterSentimentAnalysis = function TwitterSentimentAnalysis(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Classifies Document as Subjective or Objective
     *
     * The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style.
     * Texts that express personal opinions are labeled as subjective and the others as objective.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.subjectivityAnalysis = function SubjectivityAnalysis(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Identifies the Topic of the Document
     *
     * The Topic Classification function assigns documents in 12 thematic categories based on their
     * keywords, idioms and jargon. It can be used to identify the topic of the texts.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.topicClassification = function TopicClassification(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Classifies the Document as spam or nospam
     *
     * The Spam Detection function labels documents as spam or nospam by taking into account their context.
     * It can be used to filter out spam emails and comments.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.spamDetection = function SpamDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Classifies the Document as adult or noadult
     *
     * The Adult Content Detection function classifies the documents as adult or noadult based on their context.
     * It can be used to detect whether a document contains content unsuitable for minors.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.adultContentDetection = function AdultContentDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Evaluates the Readability of the Document
     *
     * The Readability Assessment function determines the degree of readability of a document based on its terms and idioms.
     * The texts are classified as basic, intermediate and advanced depending their difficulty.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.readabilityAssessment = function ReadabilityAssessment(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Identifies the Language of the Document
     *
     * The Language Detection function identifies the natural language of the given document based on its words and context.
     * This classifier is able to detect 96 different languages.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.languageDetection = function LanguageDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Classifies the Document as commercial or nocommercial
     *
     * The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions.
     * It can be used to detect whether a website is commercial or not.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.commercialDetection = function CommercialDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Classifies the Document as educational or noeducational
     *
     * The Educational Detection function classifies the documents as educational or non-educational based on their context.
     * It can be used to detect whether a website is educational or not.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.educationalDetection = function EducationalDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Gender Detection Service
     *
     * The Gender Detection function identifies if a particular document
     * is written-by or targets-to a man or a woman based on the context,
     * the words and the idioms found in the text.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.genderDetection = function GenderDetection(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Extracts the clear text from Webpage
     *
     * The Text Extraction function enables you to extract the important information from a given webpage.
     * Extracting the clear text of the documents is an important step before any other analysis.
     *
     * @param text
     * @param cb
     * @constructor
     */
    this.textExtraction = function TextExtraction(text, cb) {
        parameters = {
            text: text
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Extracts the Keywords of the Document
     *
     * The Keyword Extraction function enables you to extract from an arbitrary document all
     * the keywords and word-combinations along with their occurrences in the text.
     *
     * @param text
     * @param n
     * @param cb
     * @constructor
     */
    this.keywordExtraction = function KeywordExtraction(text, n, cb) {
        parameters = {
            text: text,
            n: n
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Estimates the similarity between 2 Documents
     *
     * The Document Similarity function estimates the degree of similarity between two documents.
     * It can be used to detect duplicate webpages or detect plagiarism.
     *
     * @param original
     * @param copy
     * @param cb
     * @constructor
     */
    this.documentSimilarity = function DocumentSimilarity(original, copy, cb) {
        parameters = {
            original: original,
            copy: copy
        };

        this.createCall(arguments.callee.name, parameters, cb);
    };

    /**
     * Magic call to given service in your given magic.
     *
     * @param service       The name of the service
     * @param parameters    JS Object maps body parameters.
     * @param cb            Callback function.
     */
    this.magic = function(service, parameters, cb) {
        this.createCall(service, parameters, cb);
    }

    /**
     *
     * @param text
     * @param services
     * @param callback
     */
    this.parallel = function(text, services, callback) {
        var _services = [
            'SentimentAnalysis', 'TwitterSentimentAnalysis', 'SubjectivityAnalysis',
            'TopicClassification', 'SpamDetection', 'AdultContentDetection',
            'ReadabilityAssessment', 'LanguageDetection', 'CommercialDetection',
            'EducationalDetection', 'GenderDetection', 'TextExtraction',
        ], calls = [], self = this;

        if (_.isEmpty(text))
            throw Error('text is not defined');

        if (_.isEmpty(services))
            throw Error('Services needs to be listed');



        _.forEach(services, function(service) {
            if ( !_.contains(_services, service))
                throw Error('Service: ' + service + " does not exists.");

            calls.push(function(cb) {
                self.magic(service, {text: text}, function(err, data) {
                    cb(err, data);
                });
            });
        });

        async.parallel(calls, function(err, results) {
            callback(err, results);
        });

    }
    return this;
}

module.exports.factory = DatumBox;