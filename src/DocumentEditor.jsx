import { Editor } from "@tinymce/tinymce-react";
import * as React from "react";
import * as _ from "lodash";
import { StatusBar } from "./StatusBar";
import email from "./email";
var MailParser = require("mailparser-mit").MailParser;
var mailparser = new MailParser();

export class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.state = {
      documentName: "Document 1",
      editorContent: '<h2 style="text-align: center;">loading</h2>',
      displayIsSaving: false
    };

    this.throttledSaveToServer = _.throttle(() => {
      setTimeout(() => {
        this.debouncedEndSaving();
        console.log(
          "Saved to server",
          this.state.documentName,
          this.state.editorContent
        );
      }, 500);
    }, 500);

    this.debouncedEndSaving = _.debounce(() => {
      this.setState({ displayIsSaving: false });
    }, 1000);

    const x = this;
    mailparser.on("end", function (mail) {
      x.setState({ editorContent: "<div>tady pis</div><hr>" + mail.html });
    });

    mailparser.write(email);
    mailparser.end();
  }

  handleEditorChange(editorContent) {
    this.save({ editorContent });
  }

  handleNameChange(documentName) {
    this.save({ documentName });
  }

  save(newPartialState) {
    this.setState(
      {
        ...newPartialState,
        displayIsSaving: true
      },
      () => {
        this.throttledSaveToServer();
      }
    );
  }

  componentWillUnmount() {
    this.debouncedEndSaving.cancel();
    this.throttledSaveToServer.cancel();
  }

  render() {
    return (
      <div className="document-editor">
        <StatusBar
          documentName={this.state.documentName}
          onNameChange={this.handleNameChange}
          displayIsSaving={this.state.displayIsSaving}
        />
        <Editor
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          onEditorChange={this.handleEditorChange}
          value={this.state.editorContent}
          init={{
            icons: "jam",
            skin: "fabric",
            content_css: "document",
            resize: false
          }}
        />
      </div>
    );
  }
}
