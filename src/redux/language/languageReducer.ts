import i18n from "i18next";
import { CHANGE_LANGUAGE, LanguageActionTypes } from "./languageActions";
export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string; }[];
}

// 按钮处初始化显示
const defaultState: LanguageState = {
    language: "en",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" }
    ]
}

let LanguageReducer = (state = defaultState, action: LanguageActionTypes) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload); // 这样处理是不标准的,有副作用
            return {
                ...state,
                language: action.payload
            };
        default:
            return defaultState;
    }
}

export default LanguageReducer;