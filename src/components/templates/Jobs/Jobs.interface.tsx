import { IButtonProps } from '../../atoms';

interface DataProps {
  sub: string;
  content: string;
  button: IButtonProps;
}
export interface IJobsInterface {
  data: DataProps;
  showCircles?: boolean;
}

export interface SalesforceJobInterface {
  Name: string;
  Account_Manager_Name__c: string;
  AVTRRT__Account_Manager__c: string;
  AVTRRT__Job_Description_Rich__c: string;
  AVTRRT__Job_Description__c: string;
  AVTRRT__Job_Title__c: string;
  AVTRRT__Experience__c?: string;
  AVTRRT__Job_Application_Tiny_URL__c?: string;
  AVTRRT__Job_Application_URL_New__c?: string;
  AVTRRT__Job_Application_URL__c?: string;
  AVTRRT__Job_Board_City__c?: string;
  AVTRRT__Job_Level__c?: string;
  AVTRRT__Job_Summary__c?: string;
  AVTRRT__Job_Term__c?: string;
  AVTRRT__Job_ID__c?: string;
  Experience_Level__c?: string;
  Hours_per_week__c: string;
  Salary_Indication_Qualogy__c?: string;
  Web_Mobile_Front_end__c: string;
  Expertise__c?: string;
  AVTRRT__Job_Contact_Email__c?: string;
}

export interface IJobInterface {
  title: string;
  description: string;
  link: string;
  icon: 'apps' | 'browser' | 'chart' | 'cloud' | 'server' | 'system';
  background_color?: string;
  salesforce_id: string;
}
