describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show', async() => {
        browser.url('/dynamic_loading/1')

        const startBtn =  $('#start button')
        const finishText = await $('#finish h4')
        const elLoading = $('#loading')

        startBtn.click()

        elLoading.waitForDisplay()

        elLoading.waitForDisplay({reverse:true})

       await expect(finishText).toHaveText("Hello World!")
    })
})