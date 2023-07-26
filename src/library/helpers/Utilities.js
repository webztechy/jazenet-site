import jQuery from 'jquery';
import { confirmAlert } from 'react-confirm-alert'; 


class UtilitiesHelper {

     // FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     isEmpty = ( s ) =>  {
        return ( ( typeof s==='undefined' ) || (s === null) || (s.length === 0));
    }

    isDigit = (c) => {
		return ((c >= "0") && (c <= "9"))
	}

    statusLabels = (n) => {
        return ( n===1 ) ? 'active' : 'inactive';
    }

    featuredLabels = (n) => {
        return ( n===1 ) ? 'yes' : 'no';
    }

    isEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
   }

    inputCharacterChecker = ( valueString = '', type = 'general') =>{
        let format = /[`!@#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/;
        if (type==='general-companyname'){
            format = /[`!@#$%^*()+\=\[\]{};:"\\|,<>\/?]+/;
        }
        return format.test(valueString) ? false : true ;
    }

    removedEmojis = ( string ) => {
        return string.replace(/\p{Emoji}/gu, '');
    }

    checkSpecialChar = (string) =>{
        //var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
        return format.test(string) ? true : false;
    }

    sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    removeSpecialChar = (text) => {
        //const  regExpr = /[^a-zA-Z0-9-. ]/g; // excluded space and .
        const  regExpr = /[^a-zA-Z0-9-]/g;
        return text.replace(regExpr, "");
    }
    
    messagePopup = ( title = 'Error', message = '' ) => {
        confirmAlert({
            title: title,
            message: message,
            overlayClassName : title.toLowerCase(),
            buttons: [
                { label: 'Close',  onClick: () => {} }
            ]
        }); 
    }

    isValidURL = (str) => {
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex .test(str)) {
            return false;
        } else {
            return true;
        }
    }

  
    addFormGroupClass = (key = '', classAttr = 'error' ) => {
        jQuery('[name="'+key+'"]').closest('.form-group').addClass(classAttr);
    }

    removeFormGroupClass = (key = '', classAttr = 'error') => {
        jQuery('[name="'+key+'"]').closest('.form-group').removeClass(classAttr);
    }

    rootFilterBlur = ( status = false ) => {
        //console.log(status);
        if ( status===true ){
            jQuery('#root').addClass('filter-blur');
        }else{
            jQuery('#root').removeClass('filter-blur');
        }
       
    }


    elementDisabledStatus = ( id, action = false ) => {
        if ( !this.isEmpty(id) ){
            let elemSelected = document.getElementById(id);
            if (typeof(elemSelected) != 'undefined' && elemSelected != null){
                elemSelected.disabled = action;

                if (action){
                    elemSelected.classList.add("animate");
                }else{
                    elemSelected.classList.remove("animate");
                }
            }
        }
    }

    scrollToSection = ( elementId = '' ) => {
        if ( elementId!= ''){
            const element = document.getElementById(elementId);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }

    onVisibleElement = (element, callback) => {
        new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
              callback(element);
              observer.disconnect();
            }
          });
        }).observe(element);
    }

    getPageHeight = () => {
        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight,  html.clientHeight, html.scrollHeight, html.offsetHeight );

        return height;
    }

    scrollToNextSection = () => {
        const _SELF = this;
        const sections = jQuery('.section-point'),
                windowBrowser = jQuery(window),
                innerWindowHeight = window.innerHeight,
                allSectionsArr = [],
                prevSectionsArr = [],
                currentScroll = windowBrowser.scrollTop();
       

        // Get all sections
        sections.each(function() {
            const thisElem = jQuery(this), idName = thisElem.attr('id');
            allSectionsArr.push(idName);

            const top = thisElem.offset().top-60;

            if (currentScroll>= top && top<=(currentScroll+innerWindowHeight) ){
                prevSectionsArr.push(idName);
            }
        });

        const remaningSectionsArr = allSectionsArr.filter(x => !prevSectionsArr.includes(x));
        
        _SELF.scrollToSection(remaningSectionsArr[0]);

    }

}

export default new UtilitiesHelper();

