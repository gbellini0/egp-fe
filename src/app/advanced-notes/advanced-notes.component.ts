import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  messages from '../../assets/messages.json'

@Component({
  selector: 'app-advanced-notes',
  templateUrl: './advanced-notes.component.html',
  styleUrls: ['./advanced-notes.component.css']
})
export class AdvancedNotesComponent implements OnInit,AfterViewInit {
  @ViewChild('chatHistory') chatHistory!: ElementRef ;
  messageList: Array<any> = []
  textMessage: any = ''
  loggedUser: string | null = null
  chatFilter: string | null = ''
  
  constructor() {
  }

  ngAfterViewInit(): void {
    this.scrollToBottom()
  }

  ngOnInit(): void {
    this.getUser()
    for(let i = 0; i< messages.length; i++){
      this.messageList.push(messages[i]);
    }
    if(window.localStorage.getItem('userMessages')){
      this.resumeMessages()
    }
    this.sortArray()
  }

  submitText(){
    var mes = null
    if(this.textMessage.trim() != ''){
      mes = {
        message : this.textMessage,
        from : 'Me',
        date: new Date().getTime(),
        show: 'true'
      }
      this.messageList.push(mes);
      this.scrollToBottom()
      this.textMessage = ''
    }
    if(window.localStorage.getItem('userMessages')){
      let msgs: any = window.localStorage.getItem('userMessages')
      window.localStorage.setItem('userMessages', '[' + msgs.split(/\[(.*?)\]/)[1] + ',' + JSON.stringify(mes).split('[')[0] + ']')
    } else {
      window.localStorage.setItem('userMessages','[' + JSON.stringify(mes) + ']')
    }
    
    //scroll to bottom  
    this.ngAfterViewInit()
  }

  scrollToBottom(): void {
    setTimeout(() =>{
      this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
    },100)
  }

  resumeMessages(){
    let msgs: any = window.localStorage.getItem('userMessages')
    let messagesArray = JSON.parse(msgs)
    if(messagesArray.length > 1){
      messagesArray.forEach((msg: any) => {this.messageList.push(msg)})
    } else {
      this.messageList.push(messagesArray)
    }
    this.sortArray()
  }

  filterChat(){
    this.messageList.forEach(msg => {
      msg.from.search(this.chatFilter) == -1 ? msg.show = 'false' : msg.show = 'true'
    })
  }

  sortArray(){
    this.messageList = this.messageList.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) ? 1: -1
     })
  }

  getUser(){
    this.loggedUser = 'Me'
  }

}
