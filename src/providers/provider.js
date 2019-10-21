import SignIn from '../SignIn';
import SignUp from '../SignUp';
import MyList from '../MyList';
import MyMedias from '../MyMedias';
import Friends from '../Friends';
import Messages from '../Messages';

export const providers = {
    const : {
        LOGO_PATH : "/assets/img/logos/logo.png",
        FIELD_REGEX_CHECK_INVALID_CARACTER : /((<script>)|(<\/script>))/g,
        FIELD_REGEX_CHECK_WHITE_SPACE : /\s/g,
        DATETIME_FORMAT : "DD/MM/YYYY HH:mm"
    },
    link : {
        SIGN_IN: "/sign_in",
        SIGN_UP: "/sign_up",
        MY_LIST : "/my_list",
        MY_MEDIAS : "/my_medias",
        FRIENDS : "/friends",
        MESSAGES : "/messages"
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
        SIGN_UP : "/back/?path=sign_up_form_submitted",
        SIGN_IN : "/back/?path=sign_in_form_submitted"
    }
}
