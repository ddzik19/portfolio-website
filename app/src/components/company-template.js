const CompanyTemplate = ({ companyName, website, date, desc }) => {
    return (
        <div className="flex">
            <div className="inline w-[300px] border-r-[2px] border-yellow">
                <a href={website} className="underline font-semibold text-white text-[20px] hover:text-yellow float-top">{companyName}</a>
                <p>{date}</p>
            </div>
            <div className="inline px-10 py-1 w-full">
                {desc}
            </div>
        </div>
    )

}

export default CompanyTemplate;