import React from "react";

export default function Form() {
    return (
        <div>
            <header className="bg-off-white text-dark-blue py-20 shadow-lg">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-6xl font-extrabold mb-4">
                        Program Application Form
                    </h1>
                </div>
            </header>

            <form className="max-w-4xl mx-auto py-10 px-6 lg:px-8">
                <div className="space-y-12">

                    {/*program question*/}
                    <fieldset>
                        <legend className="text-sm/6 font-semibold black">Which program are you applying to?</legend>
                        <p className="mt-1 text-sm/6 text-indigo-600">Select only one.</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="residential"
                                    name="program-type"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1
                                        before:rounded-full before:bg-black checked:border-indigo-500
                                        checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                                        disabled:border-black/5 disabled:bg-black/10 disabled:before:bg-black/20
                                        forced-colors:appearance-auto forced-colors:before:hidden
                                        [&:not(:checked)]:before:hidden"
                                />
                                <label htmlFor="residential" className="block text-sm/6 font-medium black">
                                    Residential SUD Program
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="recovery"
                                    name="program-type"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1 before:rounded-full
                                        before:bg-black checked:border-indigo-500 checked:bg-indigo-500
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-indigo-500 disabled:border-black/5 d
                                        isabled:bg-black/10 disabled:before:bg-black/20 forced-colors:appearance-auto
                                        forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label htmlFor="recovery" className="block text-sm/6 font-medium black">
                                    Recovery Residence
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    {/*personal*/}
                    <div className="border-b border-black/10 pb-12">
                        <h2 className="text-2xl font-semibold black">Personal Information</h2>

                        {/*info*/}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*full name*/}
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="full-name" className="block text-sm/6 font-medium black">
                                    Full Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            {/*birthdate*/}
                            <div className="sm:col-span-2">
                                <label htmlFor="bday" className="block text-sm/6 font-medium black">
                                    Birth Date:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bday"
                                        name="bday"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            {/*phone num*/}
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-num" className="block text-sm/6 font-medium black">
                                    Phone Number:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone-num"
                                        name="phone-num"
                                        type="text"
                                        autoComplete="(###)###-####"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        {/*homelessness*/}
                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*homelessness question*/}
                            <div className="">
                                <fieldset>
                                    <legend className="text-sm/6 font-semibold black">Are you currently homeless?</legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="yes-home"
                                                name="homelessness"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1
                                        before:rounded-full before:bg-black checked:border-indigo-500
                                        checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                                        disabled:border-black/5 disabled:bg-black/10 disabled:before:bg-black/20
                                        forced-colors:appearance-auto forced-colors:before:hidden
                                        [&:not(:checked)]:before:hidden"
                                            />
                                            <label htmlFor="yes-home" className="block text-sm/6 font-medium black">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="no-home"
                                                name="homelessness"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1 before:rounded-full
                                        before:bg-black checked:border-indigo-500 checked:bg-indigo-500
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-indigo-500 disabled:border-black/5 d
                                        isabled:bg-black/10 disabled:before:bg-black/20 forced-colors:appearance-auto
                                        forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label htmlFor="no-home" className="block text-sm/6 font-medium black">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            {/*last known residence*/}
                            <div className="sm:col-span-4">
                                <label htmlFor="address" className="block text-sm/6 font-medium black">
                                    Current or Last Known Residence:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base black
                                    outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline
                                    focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        {/*children*/}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*children question*/}
                            <fieldset>
                                <legend className="text-sm/6 font-semibold black">Do you have children?</legend>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="yes-children"
                                            name="children"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1
                                        before:rounded-full before:bg-black checked:border-indigo-500
                                        checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                                        disabled:border-black/5 disabled:bg-black/10 disabled:before:bg-black/20
                                        forced-colors:appearance-auto forced-colors:before:hidden
                                        [&:not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="yes-children" className="block text-sm/6 font-medium black">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="no-children"
                                            name="children"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border
                                        border-black/10 bg-black/5 before:absolute before:inset-1 before:rounded-full
                                        before:bg-black checked:border-indigo-500 checked:bg-indigo-500
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-indigo-500 disabled:border-black/5 d
                                        isabled:bg-black/10 disabled:before:bg-black/20 forced-colors:appearance-auto
                                        forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="no-children" className="block text-sm/6 font-medium black">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            {/*children info*/}
                            <div className="sm:col-span-4">
                                <label htmlFor="children-info" className="block text-sm/6 font-medium black">
                                    Number and ages of children (if applicable):
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="children-info"
                                        name="children-info"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base black
                                    outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline
                                    focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-10">
                            <h2 className="text-2xl font-semibold black">Referral Information</h2>
                            <p className="mt-1 text-sm/6 text-indigo-600">Fill out if applicable.</p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/*referred by*/}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="referred-by" className="block text-sm/6 font-medium black">
                                        Referred by (agency, institution):
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="referred-by"
                                            name="referred-by"
                                            type="text"
                                            className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/*case mgr*/}
                                <div className="sm:col-span-2">
                                    <label htmlFor="case-mgr" className="block text-sm/6 font-medium black">
                                        Contact Person/Case Manager.:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="case-mgr"
                                            name="case-mgr"
                                            type="text"
                                            className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/*mgr phone*/}
                                <div className="sm:col-span-2">
                                    <label htmlFor="mgr-phone-num" className="block text-sm/6 font-medium black">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mgr-phone-num"
                                            name="mgr-phone-num"
                                            type="text"
                                            autoComplete="(###)###-####"
                                            className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*employment status*/}
                    <div className="border-b border-black/10 pb-12">
                        <h2 className="text-2xl font-semibold black">Employment Status</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="employer" className="block text-sm/6 font-medium black">
                                    Employer:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="employer"
                                        name="employer"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="full-name" className="block text-sm/6 font-medium black">
                                    Hours per month:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="hours"
                                        name="hours"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="income" className="block text-sm/6 font-medium black">
                                    Income per month:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="income"
                                        name="income"
                                        type="text"
                                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*medical*/}
                    <div className="border-b border-black/10 pb-12">
                        <h2 className="py-5 text-2xl font-semibold black">Medical</h2>
                        <div className="col-span-full">
                            <label htmlFor="medical" className="block text-sm/6 font-medium black">
                                Please elaborate on any medications you are taking, specific needs (allergies, hearing impairment, etc), if you have healthcare, and any therapy or support groups you are attending.
                            </label>
                            <div className="mt-2">
                            <textarea
                                id="medical"
                                name="medical"
                                rows={5}
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base
                                    black outline outline-1 -outline-offset-1 outline-black/10
                                    placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2
                                    focus:outline-indigo-500 sm:text-sm/6"
                                defaultValue={''}
                            />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold black">
                        <a
                            href="/residential" className="transition-colors duration-300 text-light-blue hover:text-off-white"
                        >
                            Back to Residential SUD Program
                        </a>
                    </button>
                    <button type="button" className="text-sm/6 font-semibold black">
                        <a
                            href="/recovery" className="transition-colors duration-300 text-light-blue hover:text-off-white"
                        >
                            Back to Recovery Residence Program
                        </a>
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
