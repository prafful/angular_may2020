import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  debug(message){
    let log = this.createLogMessage('debug', message)
    console.log(log)
    return log
  }
  warn(message){
    let log = this.createLogMessage('warning', message)
    console.log(log)
    return log
  }
  info(message){
    let log = this.createLogMessage('info', message)
    console.log(log)
    return log
  } 
  error(message){
    let log = this.createLogMessage('error', message)
    console.log(log)
    return log
  }

  private createLogMessage(level, message){
    let rawdate = new Date()
    let dateString = rawdate.toLocaleString()
    return "Level: " + level + " Date: " + dateString + " Message: " + message

  }

  constructor() { }
}
