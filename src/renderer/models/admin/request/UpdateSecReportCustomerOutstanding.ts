/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UpdateSecReportCustomerOutstanding {
  tableId: number
  headers: [
    'intermediary_id',
    'report_date',
    'is_update',
    'customer_type',
    'customer_code',
    'customer_code_amlo',
    'customer_status',
    'is_digital_asset_outstanding',
    'fiat_asset_id',
    'fiat_quantity',
    'da_asset_isin',
    'da_asset_id',
    'da_asset_short_name',
    'da_wallet_address',
    'da_quantity',
  ]
  body: [
    number,
    number,
    boolean,
    string,
    string,
    string,
    string,
    boolean,
    string,
    number,
    string,
    string,
    string,
    string,
    number,
  ][]
}
