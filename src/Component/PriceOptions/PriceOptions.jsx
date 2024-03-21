import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Free weights area access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "Access to all basic features",
                "Group fitness classes",
                "Sauna access",
                "Personal locker with lock"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "features": [
                "Access to all standard features",
                "Personal training session once a month",
                "Towel service",
                "Smoothie bar access",
                "Hydro massage bed usage",
                "Priority booking for fitness classes"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;