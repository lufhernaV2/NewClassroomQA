const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.hotelRoomInfoRow = page.locator('div:nth-child(4) > div > div').first();
        this.bookingSingleRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[4]/div/div/div[3]/button');
        this.bookingTwinRoomButton = page.locator('xpath=//*[@id="root"]/div[2]/div/div[5]/div/div/div[3]/button');
        this.availabilityCalendar = page.locator('.rbc-calendar');
        this.calendarBackButton = page.getByRole('button', { name: 'Back' });
        this.calendarNextButton = page.getByRole('button', { name: 'Next' });
        this.calendarMonthTitle = page.locator('.rbc-toolbar-label');
        this.january23rdDate = page.getByText('23', { exact: true });
        this.january24thDate =  page.getByText('24', { exact: true });
        this.january25thDate = page.getByText('25', { exact: true });
        this.contactInformationFormFirstName = page.getByPlaceholder('Firstname');
        this.contactInformationFormLastName = page.getByPlaceholder('Lastname');
        this.contactInformationFormEmail = page.locator('input[name="email"]');
        this.contactInformationFormPhoneNumber = page.locator('input[name="phone"]');
        this.bookingButton = page.getByRole('button', { name: 'Book'});
        this.closeBookingModal = page.getByRole('button', { name: 'Close' });
        this.unavailableDatesError = page.locator('.alert');
        this.blankInformationContactError = page.locator('.alert');
        // this.bookingConfirmation = page.getByText('Booking Successful!', { exact: true });
        this.bookingConfirmation = page.locator('.confirmation-modal');
    }

    async goToUrl(url) {
        await this.page.goto(url);
    }

    async bookSingleRoomE2EFlow() {
        await this.bookingSingleRoomButton.click();
        await expect(this.hotelRoomInfoRow).toBeVisible();
        // checks that the calendar and the first input of the contact form are visible
        await expect(this.availabilityCalendar).toBeVisible();
        await this.january23rdDate.dragTo(this.january24thDate);
        await expect(this.contactInformationFormFirstName).toBeVisible();
        await this.calendarNextButton.click();
        await expect(this.calendarMonthTitle).toHaveText('February 2024');
        await this.calendarBackButton.click();
        await expect(this.calendarMonthTitle).toHaveText('January 2024');
        await this.contactInformationFormFirstName.fill('Luis');
        await this.contactInformationFormLastName.fill('Shmuis');
        await this.contactInformationFormEmail.fill('luis.shmuis@maillinator.com');
        await this.contactInformationFormPhoneNumber.fill('18135551444');
        await this.bookingButton.click();
        // await this.bookingConfirmation.waitFor({ state: 'visible' });
        // await expect(this.bookingConfirmation).toBeVisible();
        // await this.closeBookingModal.click();
    };

    async failedBooking() {
        await this.bookingSingleRoomButton.click();
        await this.bookingButton.click();
        await expect(this.blankInformationContactError).toBeVisible();
        await this.january23rdDate.dragTo(this.january25thDate);
        await this.contactInformationFormFirstName.fill('Luis');
        await this.contactInformationFormLastName.fill('Shmuis');
        await this.contactInformationFormEmail.fill('luis.shmuis@maillinator.com');
        await this.contactInformationFormPhoneNumber.fill('18135551444');
        await this.bookingButton.click();
        await expect(this.unavailableDatesError).toHaveText('must not be nullmust not be null');
        // await expect(this.errorAlert).toBeVisible();
    };
}

export default HomePage;