/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UpdateSecReportCustomerWallet {
  tableId: number
  headers: [
    'intermediary_id',
    'report_date',
    'is_update',
    'customer_code',
    'customer_code_amlo',
    'wallet_type',
    'is_deposit_wallet',
    'wallet_flag',
    'is_generated_by_business',
    'register_date',
    'wallet_issuer',
    'wallet_address',
    'asset_id',
    'asset_short_name',
    'asset_isin',
    'business_wallet_flag',
    'business_wallet_flag_detail',
    'business_wallet_address',
  ]
  body: [
    number,
    number,
    boolean,
    string,
    string,
    string,
    boolean,
    string,
    boolean,
    number,
    string,
    string,
    number,
    string,
    string,
    string,
    string,
    string,
  ][]
}