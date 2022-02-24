export default {
    name: 'testPage',
    type: 'document',
    title: 'Test Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Page sections',
            of: [
                { type: 'hero' },
                { type: 'imageSection' },
                { type: 'mailchimp' },
                { type: 'embedHTML' },
                { type: 'figure' },
                { type: 'internalLink' },
                { type: 'link' },
                { type: 'portableText' },
            ],
        },
    ]
}