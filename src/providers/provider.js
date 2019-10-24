import SignIn from '../SignIn';
import SignUp from '../SignUp';
import MyList from '../MyList';
import MyMedias from '../MyMedias';
import Friends from '../Friends';
import Messages from '../Messages';
import SignUpValidated from '../SignUpValidated';

export const providers = {
    const : {
        SITE_PATH : "http://localhost:3000/",
        LOGO_PATH : "/assets/img/logos/logo.png",
        FIELD_REGEX_CHECK_INVALID_CARACTER : /((<script>)|(<\/script>))/g,
        FIELD_REGEX_CHECK_WHITE_SPACE : /\s/g,
        DATETIME_FORMAT : "DD/MM/YYYY HH:mm",
        API_PATH : "http://localhost:8000/backReactlist/api",
        CAPTCHA_SITE_KEY : "6Le6QL8UAAAAAFu6Sh31eBay2fv1s-CX4smkixcU"
    },
    link : {
        SIGN_IN: "/sign_in",
        SIGN_UP: "/sign_up",
        MY_LIST : "/my_list",
        MY_MEDIAS : "/my_medias",
        FRIENDS : "/friends",
        MESSAGES : "/messages",
        CAPTCHA_CHECK : "https://www.google.com/recaptcha/api/siteverify"
    },
    routes : [
        {
            path : '/sign_in',
            Component : SignIn
        },
        {
            path : '/sign_up',
            Component : SignUp
        },
        {
            path : '/my_list',
            Component : MyList
        },
        {
            path : '/my_medias',
            Component : MyMedias
        },
        {
            path : '/friends',
            Component : Friends
        },
        {
            path : '/messages',
            Component : Messages
        },
        {
            path : '/thankyouforsignup',
            Component : SignUpValidated
        }
    ],
    redux : {
        ERROR_FIELD : "errorField",
        ADD_IN_LIST : "addInList",
        CHANGE_ITEM_TYPE_EDITION : "changeItemTypeEdition",
        CHANGE_ITEM_IS_DELETED : "changeItemIsDeleted",
        CHANGE_ITEM_VALUE : "changeItemValue",
        SPLICE_LIST : "spliceList"
    },
    submit : {
        SIGN_UP : "/?action=SignUpFormSubmitted",
        SIGN_IN : "/?action=SignInFormSubmitted"
    }
}
