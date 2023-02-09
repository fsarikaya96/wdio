describe('Main Page',async () => {
    it('Verify List items', async () => {
        await browser.url('/')

        const listExamples = $$('ul li')

        await expect(listExamples).toBeElementsArrayOfSize({gte:1})

    })
})