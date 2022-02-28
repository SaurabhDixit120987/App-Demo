import { CardSettingOptionEnum } from "../enum/CardSettingOptionEnum";
import { DebitCardOptionsSettingInterface } from "../interfaces";

export const CardSettingOptions: DebitCardOptionsSettingInterface[] = [
    {
        "id": 1,
        "title": "Top-up account",
        "description": "Deposit money to your account to use with card",
        "rightIcon": false,
        "leftIcon": CardSettingOptionEnum.topUp
    },
    {
        "id": 2,
        "title": "Weekly spending limit",
        "description": "Weekly spending limit",
        "rightIcon": true,
        "leftIcon": CardSettingOptionEnum.weekelySpending
    },
    {
        "id": 3,
        "title": "Freeze card",
        "description": "Your debit card is currently active",
        "rightIcon": true,
        "leftIcon": CardSettingOptionEnum.freezeCard
    },
    {
        "id": 4,
        "title": "Get a new cards",
        "description": "This deactivates your current debit card",
        "rightIcon": false,
        "leftIcon": CardSettingOptionEnum.getNewCard
    },
    {
        "id": 5,
        "title": "Deactivated cards",
        "description": "Your previously deactivated cards",
        "rightIcon": false,
        "leftIcon": CardSettingOptionEnum.deactivatedCard
    }
]