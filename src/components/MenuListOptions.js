import React from 'react';
import * as provider from '../providers/provider';
import { Button, Icon } from 'semantic-ui-react'
import { connect } from "react-redux";
import * as language from '../providers/lang/lang';

class MenuListOptions extends React.Component{

  render(){
    return (
        <Button animated='vertical'
            className="item-options"
            id={this.props.id}>
            <Button.Content visible id={this.props.id}><Icon name='ellipsis horizontal' id={this.props.id}/></Button.Content>
            <Button.Content hidden>
            <div className="cta-option-item" id={this.props.id} title={language.lang[this.props.lang].EDIT} onClick={this.props.onClickModify}>
                <Icon name='pencil' id={this.props.id} />
            </div>
            <div className="cta-option-item" id={this.props.id} title={language.lang[this.props.lang].SHARE} onClick={this.props.onClickShare}>
                <Icon name='share' id={this.props.id}/>
            </div>
            <div className="cta-option-item" id={this.props.id} title={language.lang[this.props.lang].DELETE} onClick={this.props.onClickDelete}>
                <Icon name='trash alternate outline' id={this.props.id}/>
            </div>
            </Button.Content>
        </Button>
    );
  }
}

function mapStateToProps(state) {
    return {
      lang: state.mainReducers.lang
    }
  }
  
  export default connect(mapStateToProps)(MenuListOptions);