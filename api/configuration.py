"""
Generate tag names in each necessary language
"""


TAGS = [
    {
        "en": "Bicycle",
        "es": "Bicicleta",
    },
    {
        "en": "Pedestrian",
        "es": "Peatonal",
    },
    {
        "en": "Transit",
        "es": "Transporte público",
    },
    {
        "en": "Speeding",
        "es": "Exceso de velocidad",
    },
    {
        "en": "Visibility",
        "es": "Visibilidad",
    },
    {
        "en": "Access / ADA",
        "es": "Acceso/ADA",
    },
    {
        "en": "Maintenance",
        "es": "Mantenimiento",
    },
    {
        "en": "Traffic",
        "es": "Tráfico",
    },
    {
        "en": "Parking",
        "es": "Estacionamiento",
    },
    {
        "en": "Wayfinding",
        "es": "Orientación",
    },
]


TAGS_ENGLISH = {}
TAGS_SPANISH = {}

for index, value in enumerate(TAGS):
    TAGS_ENGLISH[index + 1] = value["en"]
    TAGS_SPANISH[index + 1] = value["es"]
