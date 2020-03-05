export const catalogs = {
    all: {
        name: "",
        label: "全部"
    },
    technology: {
        name: "technology",
        label: "科技"
    },
    finance: {
        name: "finance",
        label: "财经"
    },
    house: {
        name: "house",
        label: "房产"
    },
    car: {
        name: "car",
        label: "汽车"
    },
    culture: {
        name: "culture",
        label: "文化"
    }
};

export const pathNameCatalogsMap = {
    "/": "all",
    "/technology": catalogs.technology.name,
    "/finance": catalogs.finance.name,
    "/house": catalogs.house.name,
    "/car": catalogs.car.name,
    "/culture": catalogs.culture.name
};


// export const currentDateUrl = 'http://192.168.163.16:80/api/currentDate';

export const currentDateUrl = 'https://www.deepinews.com/api/currentDate';
