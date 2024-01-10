class HomePage {
    constructor(page) {
        this.page = page;
        this.bookingSingleRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[4]/div/div/div[3]/button');
        this.bookingTwinRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[5]/div/div/div[3]/button');
        this.availabilityCalendar = page.locator('.rbc-calendar');
        this.contactInformationForm = page.locator('')
    }


}

export default HomePage;