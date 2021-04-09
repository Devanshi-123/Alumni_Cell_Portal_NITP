import React from 'react';
import Head from "../../head/Head";

import './NewEvent.scss';

function NewEvent() {
    return (
        <>
            <Head title="New Event" />

            <div id="new-event">
                <div id="frame">
                    <div className="frame__header"><span>Event Information</span></div>

                    <form action="#" method="" className="new-event-form">

                        <div className="form__details">

                            <div className="form__container-item">
                                <h2>Title & Description</h2>
                                <div className="container__form-fields">
                                    <div className="form-field">
                                        <label for="event-title" className="label placeholder"><span className="title-head">Event Title</span></label>
                                        <div>
                                            <input id="event-title" name="title" type="text" placeholder="Event title" maxLength="100" />
                                            <span id="char-event-title" class="character-count">100 characters remaining</span>
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="link-registration" className="label">Registration Link</label>
                                        <div>
                                            <input id="link-registration" name="link_reg" type="url" placeholder="Event Registration Link" />
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="description-short" className="label"><span className="title-head">Short Description&nbsp;</span><span className="title-tail">(displayed on Event Card)</span></label>
                                        <div>
                                            <textarea id="description-short" name="desc_short" placeholder="Event Description" maxLength="400"></textarea>
                                            <span id="char-description-short" class="character-count">400 characters remaining</span>
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="description-long" className="label"><span className="title-head">Event Description&nbsp;</span><span className="title-tail">(displayed on Event Page)</span></label>
                                        <div>
                                            <textarea id="description-long" name="desc_long" placeholder="Event Description" maxLength="10000"></textarea>
                                            <span id="char-description-long" class="character-count">10000 characters remaining</span>
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="event-banner" className="label">Event Banner</label>
                                        <div>
                                            <div class="btn-container">
                                                <input id="event-banner" name="event_banner" type="file" />
                                                <button class="upload-btn"><span class="btn-label">Upload Image</span></button>
                                            </div>
                                            <div class="image-description">Image size X x Y pixels. JPG and PNG files.</div>
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="event-thumbnail" className="label">Event Thumbnail</label>
                                        <div>
                                            <div class="btn-container">
                                                <input id="event-thumbnail" name="event_thumbnail" type="file" />
                                                <button class="upload-btn"><span class="btn-label">Upload Image</span></button>
                                            </div>
                                            <div class="image-description">Image size X x Y pixels. JPG and PNG files.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__container-item">
                                <h2>Schedule</h2>
                                <div className="container__form-fields">
                                    <div className="form-field">
                                        <label for="event-start-date" className="label">Event Starts</label>
                                        <div>
                                            <input id="event-start-date" name="event_start_date" type="date"  className="date" />
                                            <input id="event-start-time" name="event_start_time" type="time"  className="time" />
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="event-end-date" className="label">Event Ends</label>
                                        <div>
                                            <input id="event-end-date" name="event_end_date" type="date"  className="date" />
                                            <input id="event-end-time" name="event_end_time" type="time"  className="time" />
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label for="timezone-offset" className="label">Time Zone</label>
                                        <div>
                                            <select id="timezone-offset" name="timezone_offset">
                                                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                                                <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                                                <option value="-10:00">(GMT -10:00) Hawaii</option>
                                                <option value="-09:50">(GMT -9:30) Taiohae</option>
                                                <option value="-09:00">(GMT -9:00) Alaska</option>
                                                <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                                                <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                                                <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                                                <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                                                <option value="-04:50">(GMT -4:30) Caracas</option>
                                                <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                                                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                                                <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                                                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                                                <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                                                <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                                                <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                                                <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                                                <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                                                <option value="+03:50">(GMT +3:30) Tehran</option>
                                                <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                                                <option value="+04:50">(GMT +4:30) Kabul</option>
                                                <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                                                <option value="+05:50" selected="selected">(GMT +5:30) Mumbai, Calcutta, Chennai, New Delhi</option>
                                                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                                                <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                                                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                                                <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                                                <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                                                <option value="+08:75">(GMT +8:45) Eucla</option>
                                                <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                                                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                                                <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                                                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                                                <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                                                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                                                <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                                                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                                                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                                                <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__container-item">
                                <h2>Virtual Event</h2>
                                <div className="container__form-fields">
                                    <div className="form-field">
                                        <input id="virtual" name="virtual_event" type="checkbox" />
                                        <label for="virtual" className="label"><span className="label-checkbox">This is a virtual event</span></label>
                                    </div>
                                    <div className="form-field">
                                        <label for="link-broadcast" className="label">Broadcast Link</label>
                                        <div>
                                            <input id="link-broadcast" name="link_broadcast" type="url" placeholder="Broadcast Link" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="form__nav-bottom">
                            <div class="buttonsContainer"><button class="btn"><span class="btn-label">Publish</span></button><button class="btn"><span class="btn-label">Save Draft</span></button></div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default NewEvent;