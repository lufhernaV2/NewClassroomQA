class HomePage {
    constructor(page) {
        this.page = page;
        this.hotelRoomInfoRow = page.locator('.row hotel-room-info');
        this.bookingSingleRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[4]/div/div/div[3]/button');
        this.bookingTwinRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[5]/div/div/div[3]/button');
        this.availabilityCalendar = page.locator('.rbc-calendar');
        this.calendarBackButton = page.getByRole('button', { name: 'Back' });
        this.calendarNextButton = page.getByRole('button', { name: 'Next' });
        this.contactInformationFormFirstName = page.getByPlaceholder('Firstname');
        this.contactInformationFormLastName = page.getByPlaceholder('Lastname');
        this.contactInformationFormEmail = page.locator('.form-control room-email');
        this.contactInformationFormPhoneNumber = page.locator('.form-control room-phone');
        this.bookingButton = page.getByRole('button', { name: 'Book'});
    }
    async goToUrl(url) {
        await this.page.goto(url);
    }

    async bookSingleRoomE2EFlow() {
        await expect(this.hotelRoomInfoRow).toBeVisible();
        await this.bookingSingleRoomButton.click();
        // checks that the calendar and the first input of the contact form are visible
        await expect(this.availabilityCalendar).toBeVisible();
        await expect(this.contactInformationFormFirstName).toBeVisible();
        await this.calendarNextButton.click();
    }

}

export default HomePage;