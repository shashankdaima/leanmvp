import random


def get_random_int(min_value, max_value):
    return random.randint(min_value, max_value)


def generate_data():
    months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]

    data = []
    for month in months:
        # Generate base sales and previous year sales
        base_sale = get_random_int(10000, 20000)
        base_prev_year_sale = base_sale - get_random_int(
            1000, 3000
        )  # Previous year sale slightly lower

        # Simulate fluctuations with a random factor
        sale_fluctuation = get_random_int(
            -2000, 2000
        )  # Random fluctuation up to +/- 2000
        prev_year_fluctuation = get_random_int(
            -1500, 1500
        )  # Random fluctuation up to +/- 1500

        # Apply fluctuations to base sales
        sale = base_sale + sale_fluctuation
        prev_year_sale = base_prev_year_sale + prev_year_fluctuation

        # Ensure sale and prevYearSale are non-negative
        sale = max(0, sale)
        prev_year_sale = max(0, prev_year_sale)

        data.append({"month": month, "sale": sale, "prevYearSale": prev_year_sale})

    return data


def get_random_number(min_value, max_value):
    return random.randint(min_value, max_value)


def get_random_percentage():
    return random.uniform(-20, 20)  # Random percentage between -20% and 20%


def generate_static_info():
    return {
        "views": {
            "actualNo": str(get_random_number(500000, 1000000)),
            "changePercentage": f"{get_random_percentage():.2f}",
        },
        "visits": {
            "actualNo": str(get_random_number(500000, 1000000)),
            "changePercentage": f"{get_random_percentage():.2f}",
        },
        "newUsers": {
            "actualNo": str(get_random_number(500000, 1000000)),
            "changePercentage": f"{get_random_percentage():.2f}",
        },
        "activeUsers": {
            "actualNo": str(get_random_number(500000, 1000000)),
            "changePercentage": f"{get_random_percentage():.2f}",
        },
    }


def generate_traffic_data():
    devices = ["linux", "windows", "mac", "android", "ios", "other"]
    locations = [
        {"country": "United States", "color": "#1C1C1C"},
        {"country": "Canada", "color": "#BAEDBD"},
        {"country": "Mexico", "color": "#95A4FC"},
        {"country": "Other", "color": "#B1E3FF"},
    ]

    # Generate random traffic by device
    traffic_by_device = []
    for device in devices:
        traffic_by_device.append(
            {"device": device, "count": random.randint(10000000, 100000000)}
        )

    # Generate random traffic by location
    traffic_by_location = []
    total_percentage = 100.0
    for i, location in enumerate(locations):
        if i == len(locations) - 1:  # Last location gets the remaining percentage
            percentage = total_percentage
        else:
            percentage = round(
                random.uniform(5, total_percentage / (len(locations) - i)), 1
            )
            total_percentage -= percentage

        traffic_by_location.append(
            {
                "country": location["country"],
                "percentage": percentage,
                "color": location["color"],
            }
        )

    return {
        "trafficByDevice": traffic_by_device,
        "trafficByLocation": traffic_by_location,
    }
