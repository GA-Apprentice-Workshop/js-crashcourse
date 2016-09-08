/**
 * Created by proto on 2/29/16.
 */

var contentTitle = document.getElementById('title');
var contentText = document.getElementById('text');

var dataTypes = {
    primitives: {
        'strings': 'This is a string.',
        'integers': 1,
        'boolean': true,
        'undefined': 'As it suggests, an undefined value.',
        'null': 'As it suggests, there is no value.'
    },
    nonPrimitives: {
        'array': [this.strings, this.integers, this.boolean],
        'hash': this.primitives
    }
};
var titles = ['Data Types', 'Variables', 'Functions'];

function updateContent(topic) {
    var topicIndex = titles.indexOf(topic)
    contentTitle.innerHTML = titles[topicIndex];
}
